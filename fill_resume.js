const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

async function fillResume() {
    const existingPdfBytes = fs.readFileSync('abey-resume-template.pdf');
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pages = pdfDoc.getPages();
    const page = pages[0];

    const fontSize = 10;
    const nameSize = 24;

    const color = rgb(0.1, 0.1, 0.1);

    // --- Header ---
    page.drawText('Adrian Vaflor', { x: 50, y: 780, size: nameSize, color });
    page.drawText('Software Engineer | Full-Stack Developer', { x: 50, y: 760, size: 12, color });
    page.drawText('adrianvaflor9@gmail.com | github.com/DaRainFlavor | linkedin.com/in/AdrianVaflor', { x: 50, y: 745, size: fontSize, color });

    // --- Education ---
    page.drawText('EDUCATION', { x: 50, y: 710, size: 14, color });
    page.drawText('Bachelor of Science in Computer Science', { x: 50, y: 690, size: 11, color });
    page.drawText('University of the Philippines Cebu', { x: 50, y: 675, size: fontSize, color });
    page.drawText('GWA: 1.55 (Cum Laude Standing)', { x: 50, y: 660, size: fontSize, color });
    page.drawText('Expected: 2026', { x: 450, y: 690, size: fontSize, color });

    // --- Experience ---
    page.drawText('EXPERIENCE', { x: 50, y: 630, size: 14, color });
    page.drawText('Asset Management Intern', { x: 50, y: 610, size: 11, color });
    page.drawText('Lexmark-Xerox Global Services Support | Cebu, Philippines', { x: 50, y: 595, size: fontSize, color });
    page.drawText('2025', { x: 450, y: 610, size: fontSize, color });
    page.drawText('• Handled asset management, data processing, and operational support within the Customer Data Management team.', { x: 60, y: 580, size: fontSize, color });
    page.drawText('• Validated 250 hours worth of data, guaranteeing accuracy and smooth operational workflows.', { x: 60, y: 565, size: fontSize, color });
    page.drawText('• Ensured careful processing of sensitive data, demonstrating trust and accountability in enterprise-level environments.', { x: 60, y: 550, size: fontSize, color });


    // --- Projects ---
    page.drawText('PROJECTS', { x: 50, y: 515, size: 14, color });

    const p1Y = 495;
    page.drawText('Inspectify | React Native (Expo), Python (Flask), MySQL, Gemini API', { x: 50, y: p1Y, size: 11, color });
    page.drawText('• Built a full-stack mobile application that analyzes user-uploaded images of housing damage.', { x: 60, y: p1Y - 15, size: fontSize, color });
    page.drawText('• Integrated the Gemini API to assess structural integrity via photos and generate customized maintenance plans.', { x: 60, y: p1Y - 30, size: fontSize, color });
    page.drawText('• Designed and managed a MySQL database to securely store user data, and AI-generated reports (hosted on Cloudinary).', { x: 60, y: p1Y - 45, size: fontSize, color });

    const p2Y = 430;
    page.drawText('CHR Case Management & Monitoring System | Next.js, Supabase, Tailwind CSS, Vercel', { x: 50, y: p2Y, size: 11, color });
    page.drawText('• Developed a secure, role-based system from scratch for the Commission on Human Rights Region VII.', { x: 60, y: p2Y - 15, size: fontSize, color });
    page.drawText('• Engineered full case workflow tracking, real-time monitoring dashboards, and managed access for 6 different roles.', { x: 60, y: p2Y - 30, size: fontSize, color });

    const p3Y = 380;
    page.drawText('MBTI Personality Type Classification | Python, XGBoost, Random Forest, Next.js', { x: 50, y: p3Y, size: 11, color });
    page.drawText('• Created a custom MBTI test and analyzed results using 4 ML techniques: XGBoost, Random Forest, Logistic Regression, LDA.', { x: 60, y: p3Y - 15, size: fontSize, color });
    page.drawText('• Built a full web interface for test-taking and visualizing the analyzed results.', { x: 60, y: p3Y - 30, size: fontSize, color });

    const p4Y = 330;
    page.drawText('Compiley Studio | Python, Tkinter, MIPS Assembly', { x: 50, y: p4Y, size: 11, color });
    page.drawText('• Acted as Project Manager and Full Stack Developer to build a desktop IDE running a custom language ("Brainrot").', { x: 60, y: p4Y - 15, size: fontSize, color });
    page.drawText('• Developed an integrated compiler and a scratch-built AI assistant capable of speech and text interaction.', { x: 60, y: p4Y - 30, size: fontSize, color });


    // --- Skills ---
    page.drawText('SKILLS', { x: 50, y: 280, size: 14, color });
    page.drawText('Languages: Python, SQL, C/C++, TypeScript, JavaScript', { x: 50, y: 260, size: fontSize, color });
    page.drawText('Frameworks/Libraries: Next.js, React Native (Expo), Flask, React, Tailwind CSS', { x: 50, y: 245, size: fontSize, color });
    page.drawText('Tools & Cloud: Vercel, Supabase, MySQL, Cloudinary, Git', { x: 50, y: 230, size: fontSize, color });
    page.drawText('Concepts: GenAI Integration, Database Architecture, UI/UX Design', { x: 50, y: 215, size: fontSize, color });


    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('Adrian_Vaflor_Tailored_Resume.pdf', pdfBytes);
    console.log('Successfully created Adrian_Vaflor_Tailored_Resume.pdf');
}

fillResume().catch(err => console.error(err));
