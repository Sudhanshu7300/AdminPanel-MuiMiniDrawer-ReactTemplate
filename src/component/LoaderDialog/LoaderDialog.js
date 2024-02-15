import React from "react";
import { Dialog } from "@mui/material";

const LoaderDialogue = ({ loading }) => {
  return (
    <div>
      <Dialog
        open={loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" loading-Zip-file"
      >
        <div class="loader">
          <div class="loader-inner">
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LoaderDialogue;
