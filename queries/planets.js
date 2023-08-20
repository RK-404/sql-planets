const db = require("../db/dbConfig.js");

// ALL Items
const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT * FROM planets");
    return allItems;
  }
  catch (error) {
    return error;
  }
};

// ONE Item
const getOneItem = async (id) => {
  try {
    const oneItem = await db.one("SELECT * FROM planets WHERE id=$1", id);
    return oneItem;
  }
  catch (error) {
    return error;
  }
};

// CREATE
const createItem = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO planets (name, type, planet_order, sun_distance, radius, day_length, year_length, moons, description, nasa_link, img_src, is_primary) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [item.name, item.type, item.planet_order, item.sun_distance, item.radius, item.day_length, item.year_length, item.moons, item.description, item.nasa_link, item.img_src, item.is_primary]
    );
    return newItem;
  }
  catch (error) {
    return error;
  }
};

// DELETE
const deleteItem = async (id) => {
  try {
    const deletedItem = await db.one(
      "DELETE FROM planets WHERE id = $1 RETURNING *", id
    );
    return deletedItem;
  }
  catch (error) {
    return error;
  }
};

// UPDATE
const updateItem = async (id, item) => {
  try {
    const updatedItem = await db.one(
      "UPDATE planets SET name=$1, type=$2, planet_order=$3, sun_distance=$4, radius=$5, day_length=$6, year_length=$7, moons=$8, description=$9, nasa_link=$10, img_src=$11, is_primary=$12 WHERE id=$13 RETURNING *",
      [item.name, item.type, item.planet_order, item.sun_distance, item.radius, item.day_length, item.year_length, item.moons, item.description, item.nasa_link, item.img_src, item.is_primary, id]
    );
    return updatedItem;
  }
  catch (error) {
    return error;
  }
};
  
module.exports = {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItem
};
