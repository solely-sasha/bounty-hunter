const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bountyModel");


bountyRouter.get("/", (req, res, next) => {
  Bounty.find({})
    .then((bounties) => {
      res.status(200).send(bounties);
    })
    .catch((err) => {
      next(err);
    });
});

bountyRouter.get("/:bountyId", (req, res, next) => {
  const { bountyId } = req.params;
  Bounty.findById(bountyId)
    .then((foundBounty) => {
      if (!foundBounty) {
        res.status(404).send({ message: "bounty not found" });
      } else {
        res.status(200).send(foundBounty);
      }
    })
    .catch((error) => {
      next(error);
    });
});

bountyRouter.post("/", (req, res, next) => {
  Bounty.create(req.body)
    .then((newBounty) => {
      res.status(200).send(newBounty);
    })
    .catch((error) => {
      next(error);
    });
});

bountyRouter.delete("/:bountyId", (req, res, next) => {
  const { bountyId } = req.params;
  Bounty.findByIdAndDelete(bountyId)
    .then((bounty) => {
      if (!bounty) {
        return res.status(404).send({ message: "bounty not found" });
      }
      res.status(200).send(bounty);
    })
    .catch((error) => {
      next(error);
    });
});

bountyRouter.put("/:bountyId", (req, res, next) => {
  const { bountyId } = req.params;
  Bounty.findByIdAndUpdate(bountyId, req.body).then((bounty) => {
    if (!bounty) {
      return res.status(404).send({ message: "bounty not found" });
    }
    Bounty.findById(bountyId)
      .then((updatedBounty) => {
        res.status(200).send(updatedBounty);
      })
      .catch(() => {
        next(error);
      });
  });
});

module.exports = bountyRouter;
