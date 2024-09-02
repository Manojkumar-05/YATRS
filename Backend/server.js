const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
 
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const formatTimestamp = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

// Custom storage engine for multer to preserve file type and name with a timestamp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const timestamp = formatTimestamp();
        const originalName = file.originalname;
        const extension = path.extname(originalName);
        const basename = path.basename(originalName, extension);
        const newFilename = `${basename}_${timestamp}${extension}`;
        cb(null, newFilename);
    },
});

const upload = multer({ storage });

// Route to handle form submissions
app.post("/api/submit", upload.single("resume"), (req, res) => {
    const { name, email, phone, formType, coverLetter } = req.body;

    if (!req.file && formType === "jobs") {
        return res.status(400).send("Resume file is required for job applications.");
    }

    let filePath = path.join(__dirname, "applications.xlsx");
    let workbook;

    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath);
    } else {
        workbook = XLSX.utils.book_new();
    }

    let sheetName;
    if (formType === "jobs") {
        sheetName = "Job_Applications";
    } else {
        sheetName = "Intern_Applications";
    }

    let worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        worksheet = formType === "jobs"
            ? XLSX.utils.aoa_to_sheet([["Name", "Email", "Phone", "Resume"]]) // Header row for jobs
            : XLSX.utils.aoa_to_sheet([["Name", "Email", "Phone", "Cover Letter"]]); // Header row for internships
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    }

    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    if (formType === "jobs") {
    data.push([
        name,
        email,
        phone,
        req.file.filename,
    ]);
    }
    else{
        data.push([
            name,
            email,
            phone,  
            coverLetter,
        ]); 
    }
    const newWorksheet = XLSX.utils.aoa_to_sheet(data);
    workbook.Sheets[sheetName] = newWorksheet;
    XLSX.writeFile(workbook, filePath);

    res.status(200).send("Application submitted successfully");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
