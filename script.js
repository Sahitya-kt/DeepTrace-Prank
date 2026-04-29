const terminal = document.getElementById('terminal-text');
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let isStarted = false;

// --- 1. MATRIX BACKGROUND EFFECT ---
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const alphabet = "01666ERRORHACKED$#@%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: Math.floor(columns) }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) rainDrops[i] = 0;
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 35);

// --- 2. TYPING ENGINE ---
async function writeLine(message, delay = 40, color = "#0F0") {
    return new Promise(resolve => {
        let i = 0;
        let line = document.createElement('p');
        line.style.margin = "4px 0";
        line.style.color = color;
        terminal.appendChild(line);
        let interval = setInterval(() => {
            line.innerHTML += message[i];
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

// --- 3. THE MASTER HACKING LOGIC ---
async function initiateHacking() {
    if (isStarted) return;
    isStarted = true;
    document.getElementById('click-hint').style.display = 'none';

    // --- SECRET DATA FETCHING (No Permission Needed) ---
    let batLevel = "88%";
    try { const b = await navigator.getBattery(); batLevel = Math.floor(b.level * 100) + "%"; } catch (e) { }

    const ram = navigator.deviceMemory || "4GB (Standard)";
    const cpuCores = navigator.hardwareConcurrency || "Unknown Core";
    const os = navigator.platform;
    const netType = (navigator.connection && navigator.connection.effectiveType) || "4G/WiFi";
    const lang = navigator.language;
    const screenRes = `${window.screen.width}x${window.screen.height}`;

    // --- EXECUTION SEQUENCE ---
    await writeLine("> [SYSTEM] INITIALIZING DEEP TRACE PROTOCOL...");
    await writeLine("> BYPASSING FIREWALL... [DONE]");
    await writeLine("> EXTRUDING SYSTEM METADATA...");

    // Yahan se user shock hona shuru hoga (Asli details)
    await writeLine(`> TARGET_OS: ${os} | CPU_CORES: ${cpuCores}`, 40, "orange");
    await writeLine(`> MEMORY_DETECTED: ${ram} RAM | DISPLAY: ${screenRes}`);
    await writeLine(`> NETWORK_STRENGTH: ${netType} | LOCALE: ${lang}`);
    await writeLine(`> ENERGY_STATUS: ${batLevel} (Monitoring Consumption...)`, 40, "orange");

    await writeLine("> TRACING_IP_ADDRESS: 103.21.XX.XX [Bettiah Sector-04]");
    await writeLine("> ACCESSING BROWSER HISTORY... [FAILED_BUT_RETRIEVING_CACHE]");
    await writeLine("> [ALERT] EXTRACTING PRIVATE WHATSAPP_KEY...");
    await writeLine("> FRONT_CAMERA_ACCESS: [ACTIVE_SILENT_MODE]", 40, "red");
    await writeLine("> SYNCING GALLERY TO HIDDEN_CLOUD_SERVER...", 40, "red");

    // Dramatic Pause for Panic
    await new Promise(r => setTimeout(r, 1200));

    await writeLine("> [WARNING] ENCRYPTING ALL PERSONAL FILES...", 30, "red");
    await writeLine("> DELETING_SYSTEM_RECOVERY_PARTITION... 67%", 30, "red");
    await writeLine("> [CRITICAL] YOUR DEVICE IS NOW UNDER EXTERNAL CONTROL", 60, "red");

    // The Final Fear Blow
    await new Promise(r => setTimeout(r, 2000));
    await writeLine("> --------------------------------------------------");
    await writeLine("> LOOK BEHIND YOU...", 150, "red");

    // Wait for 4 seconds so they actually look behind!
    await new Promise(r => setTimeout(r, 4000));
}
