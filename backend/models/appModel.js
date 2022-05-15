import mongoose from "mongoose";
const appsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    projectLink: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageTitle: [
      {
        title: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Apps = mongoose.model("Apps", appsSchema);

export default Apps;
