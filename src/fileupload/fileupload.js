import multer, { diskStorage } from "multer";
import { nanoid } from "nanoid";
import { AppError } from "../utils/appError.js";

export const fileupload = (foldername) => {
  const storage = diskStorage({});

  function filefilter(req, file, cb) {
    if (file.mimetype.startWith("image")) {
      cb(null, true);
    } else {
      cb(new AppError("images only", 401), false);
    }
  }

  const uplaod = multer({ storage, filefilter });
  return uplaod;
};

export const uplaodsinglefile = (fieldname, foldername) =>
  fileupload(foldername).single(fieldname);
export const uplaodsmixfiles = (arrayoffileds, foldername) =>
  fileupload(foldername).fields(arrayoffileds);
