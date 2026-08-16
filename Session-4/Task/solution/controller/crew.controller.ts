import { Request, Response } from "express";
import { CrewMember } from "../models/crew.model";

export const getAllCrew = async (
  req: Request,
  res: Response
): Promise<void> => {
  const crew = await CrewMember.find();

  res.status(200).json(crew);
};

export const getCrewById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);

  const crew = await CrewMember.findOne({ id });

  if (!crew) {
    res.status(404).json({
      message: "Crew member not found.",
    });
    return;
  }

  res.status(200).json(crew);
};

export const deleteCrew = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);

  const crew = await CrewMember.findOneAndDelete({ id });

  if (!crew) {
    res.status(404).json({
      message: "Crew member not found.",
    });
    return;
  }

  res.status(200).json({
    message: "Crew member deleted successfully.",
  });
};

export const updateCrew = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);

  const { role, age } = req.body;

  const crew = await CrewMember.findOneAndUpdate(
    { id },
    { role, age },
    { new: true }
  );

  if (!crew) {
    res.status(404).json({
      message: "Crew member not found.",
    });
    return;
  }

  res.status(200).json(crew);
};

export const filterCrew = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { role, minAge, maxAge } = req.query;

  const filter: any = {};

  if (role) {
    filter.role = role;
  }

  if (minAge || maxAge) {
    filter.age = {};

    if (minAge) {
      filter.age.$gte = Number(minAge);
    }

    if (maxAge) {
      filter.age.$lte = Number(maxAge);
    }
  }

  const crew = await CrewMember.find(filter);

  res.status(200).json(crew);
};

export const addMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);

  const crew = await CrewMember.findOne({ id });

  if (!crew) {
    res.status(404).json({
      message: "Crew member not found.",
    });
    return;
  }

  const missionId =
    crew.missions.length > 0
      ? crew.missions[crew.missions.length - 1].missionId + 1
      : 1;

  crew.missions.push({
    missionId,
    islandName: req.body.islandName,
    status: req.body.status || "Not Started",
  });

  await crew.save();

  res.status(201).json(crew);
};