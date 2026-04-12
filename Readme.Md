<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Carter Moore Resume</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    background: url("CMS BG.png") no-repeat center center/cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main Container */
.container {
    width: 90%;
    max-width: 1100px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 30px;
    color: white;
    box-shadow: 0 0 30px rgba(0,0,0,0.6);
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(255,255,255,0.2);
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.name {
    font-size: 2rem;
    font-weight: bold;
}

.tagline {
    font-size: 0.9rem;
    color: #ccc;
}

.contact {
    text-align: right;
    font-size: 0.9rem;
}

/* Sections */
.section {
    margin-bottom: 25px;
}

.section h2 {
    margin-bottom: 10px;
    border-left: 4px solid #ff7a00;
    padding-left: 10px;
}

/* Job */
.job {
    margin-bottom: 15px;
}

.job-title {
    font-weight: bold;
}

.job-date {
    font-size: 0.8rem;
    color: #bbb;
}

/* Two Column Layout */
.grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}

/* Lists */
ul {
    padding-left: 20px;
}

li {
    margin-bottom: 8px;
}
</style>
</head>

<body>

<div class="container">

    <!-- Header -->
    <div class="header">
        <div>
            <div class="name">Carter (csrter555)</div>
            <div class="tagline">
                Innovative. Delicate. Modern. — Work you'd pay millions for at a price you'll double take.
            </div>
        </div>
        <div class="contact">
            (567) 242-4656<br>
            carter.business.est@gmail.com
        </div>
    </div>

    <div class="grid">

        <!-- LEFT SIDE -->
        <div>

            <!-- Experience -->
            <div class="section">
                <h2>Experience</h2>

                <div class="job">
                    <div class="job-title">Orihost — Technical Support Specialist</div>
                    <div class="job-date">Sept 2025 - Present</div>
                    <p>Remote hosting company for Minecraft servers, websites, and Discord bots.</p>
                </div>

                <div class="job">
                    <div class="job-title">.host — Customer Support Specialist</div>
                    <div class="job-date">March 2026 - April 2026</div>
                    <p>Left due to internal conflict and misaligned values.</p>
                </div>

                <div class="job">
                    <div class="job-title">Vexicon — Design Specialist & Management</div>
                    <div class="job-date">April 2025 - August 2025</div>
                    <p>Graphic design, bot development, HR, PR, and internal affairs.</p>
                </div>

                <div class="job">
                    <div class="job-title">Blossom Customs — Design & Operations</div>
                    <div class="job-date">Sept 2025 - Feb 2026</div>
                    <p>Promoted to management and operations leadership.</p>
                </div>

                <div class="job">
                    <div class="job-title">Illustrate Designs — Senior Designer & Management</div>
                    <div class="job-date">March 2025 - Feb 2026</div>
                    <p>Promoted through performance and leadership.</p>
                </div>
            </div>

            <!-- Projects -->
            <div class="section">
                <h2>Projects</h2>

                <div class="job">
                    <div class="job-title">Carter’s Customs Management</div>
                    <p>Advanced Discord bot with API integrations and financial systems.</p>
                </div>

                <div class="job">
                    <div class="job-title">Taxas Roleplay Management</div>
                    <p>Game-connected API bot retrieving and displaying user data.</p>
                </div>
            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div>

            <!-- Skills -->
            <div class="section">
                <h2>Skills</h2>
                <ul>
                    <li>Python, JavaScript, HTML, React Native</li>
                    <li>Database Management</li>
                    <li>UI/UX & Graphic Design</li>
                    <li>Technical & Customer Support</li>
                </ul>
            </div>

            <!-- Languages -->
            <div class="section">
                <h2>Languages</h2>
                <ul>
                    <li>English</li>
                    <li>Spanish</li>
                    <li>French</li>
                </ul>
            </div>

        </div>

    </div>

</div>

</body>
</html>
