const terminal = document.getElementById('terminal-text');
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let isStarted = false;

// 1. Matrix Background
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const alphabet = "0101HACKEDERROR666$#@%";
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

// 2. Typing Engine with Auto-Scroll
async function writeLine(message, delay = 40, color = "#0F0") {
    return new Promise(resolve => {
        let line = document.createElement('p');
        line.style.color = color;
        line.style.margin = "4px 0";
        terminal.appendChild(line);
        let i = 0;
        let interval = setInterval(() => {
            line.innerHTML += message[i];
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                // Har line ke baad niche scroll karega
                window.scrollTo(0, document.body.scrollHeight);
                resolve();
            }
        }, delay);
    });
}

// 3. The Master Logic
async function initiateHacking() {
    if (isStarted) return;
    isStarted = true;
    document.getElementById('click-hint').style.display = 'none';

    // --- SECRET DATA (Bina Permission) ---
    let bat = "88%";
    try { const b = await navigator.getBattery(); bat = Math.floor(b.level * 100) + "%"; } catch(e){}
    
    let os = navigator.platform;
    if (navigator.userAgent.indexOf("Android") !== -1) os = "Android OS (Mobile)";
    
    const ram = navigator.deviceMemory || "4GB (Standard)";
    const cpu = navigator.hardwareConcurrency || "Octa-Core";
    const net = (navigator.connection && navigator.connection.effectiveType) || "5G";
    const screenRes = `${window.screen.width}x${window.screen.height}`;

    // --- SEQUENCE ---
    await writeLine("> [SYSTEM] INITIALIZING DEEP TRACE PROTOCOL...");
    await writeLine("> BYPASSING LOCAL FIREWALL... [DONE]");
    await writeLine(`> TARGET_OS: ${os} | NETWORK: ${net}`, 40, "orange");
    await writeLine(`> HARDWARE: ${cpu} CPU | RAM: ${ram}`, 40, "orange");
    await writeLine(`> DISPLAY: ${screenRes} | BATTERY: ${bat}`);
    await writeLine("> [ALERT] EXTRACTING SAVED CHROME PASSWORDS...");
    await writeLine("> TRACING IP: 103.21.XX.XX [Bettiah Sector-04]");
    await writeLine("> ACCESSING WHATSAPP DATABASE... [ALERT]");
    await writeLine("> FRONT_CAMERA: [LIVE_FEED_ACTIVE]", 40, "red");
    await writeLine("> SYNCING GALLERY TO HIDDEN_SERVER...", 40, "red");
    
    await new Promise(r => setTimeout(r, 1000));
    
    await writeLine("> [WARNING] ENCRYPTING LOCAL FILES (C:/Users/Data)", 30, "red");
    await writeLine("> SHARING SYSTEM32... 15%... 48%... 99%", 20, "red");
    await writeLine("> [FATAL ERROR] DEVICE UNDER EXTERNAL CONTROL", 50, "red");
    
    await new Promise(r => setTimeout(r, 1500));
    await writeLine("> ------------------------------------");
    await writeLine("> LOOK BEHIND YOU...", 150, "red");
    
    await new Promise(r => setTimeout(r, 4000));
    await writeLine("> HEY, BRAT! Now your device or system in my control...    GEN. by SAHITYA KT.! 🐻");
}
