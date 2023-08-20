const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    }
    else {
        res.status(400).json({ error: "Name is required" });
    }
}

const checkType = (req, res, next) => {
    if (req.body.type) {
        next();
    }
    else {
        res.status(400).json({ error: "Website is required" });
    }
}

const checkBoolean = (req, res, next) => {
    const { is_primary } = req.body;
    if (["true", "false", true, false, undefined].includes(is_primary)) {
        next();
    }
    else {
        res.status(400).json({ error: "is_primary must be a boolean value" });
    }
}

module.exports = { checkName, checkType, checkBoolean };
