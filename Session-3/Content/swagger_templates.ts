swagger options: 

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "your title",
            version: "1.0.0",
            description: "your description"
        },
        servers : [{
           url: "http://localhost:your_port"} // or "/" (for the current API)
        ]
    },
    apis: ["your path"]
}


SCHEMA:
/**
 * @swagger
 * components:
 *   schemas:
 *     [your schema name]:
 *       type: object
 *       required:
 *         - at1
 *         - at2
 *         - at3
 *       properties:
 *         att1:
 *           type: []
 *           description: []
 *         att2:
 *           type: []
 *           description: []
 *         att3:
 *           type: []
 *           description: []
 *         att4:
 *           type: []
 *           description: []
 *         att5:
 *           type: []
 *           description: []
 *         att6:
 *           type: []
 *           description: []
 *         att7:
 *           type: []
 *           description: []
 *       example:
 *         att1: []
 *         att2: []
 *         att3: []
 *         att4: []
 *         att5: []
 *         att6: []
 *         att7: []
 */

TAGS:

/**
 * @swagger
 * tags:
 *   name: []
 *   description: []
 */

routes template:

/**
 * @swagger
 * [your path]:
 *   [method]:
 *     tags: []
 *     summary: []
 *     parameters:
 *       - in: [path/query]
 *         name: []
 *         schema:
 *           type: []
 *         required: []
 *         description: 
 *     requestBody:
 *       required: []
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 
 *     responses:
 *       200:
 *         description: 
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: 
 *       404:
 *         description: 
 *       500:
 *         description: Some server error!
 */



response template for returning an array:
 *     responses:
 *       200:
 *         description: []
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: []
