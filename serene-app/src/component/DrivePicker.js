// const { google } = require("googleapis");
// const path = require("path");
// const fs = require("fs");

// const CLIENT_ID =
//   "439599481122-gh14hdgh43admaof0m8sm5dbmfmck6tk.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REDIRECT_URL = "https://developers.google.com/oauthplayground";

// const REFRESH_TOKEN =
//   "1//04nJuP6j1MgzPCgYIARAAGAQSNwF-L9IrJXW8rjrQY2lbfg0fEBFxZiRO15WITdaH0RNDfapK4HsvEdvtnTwqtXFckB0pa1hkn0c";

// const oauth2Client = google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({ version: "v3", auth: oauth2Client });

// const filePath = path.join(__dirname);

// async function uploadFile() {
//   try {
//     const response = await drive.files.create({
//       requestBody: {
//         name: "test.txt",
//         mimeType: "text/plain",
//       },
//       media: {
//         mimeType: "text/plain",
//         body: fs.createReadStream(filePath),
//       },
//     });
//     console.log(response.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// uploadFile();

import React from "react";

function DrivePicker() {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        DrivePicker
      </button>
    </div>
  );
}

export default DrivePicker;
