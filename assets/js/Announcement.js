document.addEventListener("DOMContentLoaded", function() {
    function showAnnouncementPopup() {
        let popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.width = "400px";
        popup.style.height = "250px";
        popup.style.backgroundColor = "#ffcc00";
        popup.style.color = "#333";
        popup.style.borderRadius = "15px";
        popup.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        popup.style.padding = "25px";
        popup.style.textAlign = "center";
        popup.style.fontSize = "18px";
        popup.style.fontWeight = "bold";
        popup.style.fontFamily = "Arial, sans-serif";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "1000";
        popup.style.border = "3px solid #ff6600";

        let message = document.createElement("p");
        message.textContent = "📢 WELCOME TO LetsBeAnalyst 🚀\nMaster Data Analytics in Just 6 Months! 💡\nLIVE Sessions | Job-Ready Curriculum | Expert Mentors\n📢 Limited Seats – Enroll Now for ₹9999 Only!";
        message.style.margin = "10px 0";
        message.style.fontSize = "20px";
        message.style.color = "#d60000";
        message.style.fontWeight = "bold";
        message.style.textAlign = "center";
        message.style.lineHeight = "1.5";
        document.body.appendChild(message);
        

        let learnMoreBtn = document.createElement("button");
        learnMoreBtn.textContent = "Learn More";
        learnMoreBtn.style.marginTop = "15px";
        learnMoreBtn.style.padding = "10px 15px";
        learnMoreBtn.style.border = "none";
        learnMoreBtn.style.backgroundColor = "#007BFF";
        learnMoreBtn.style.color = "#fff";
        learnMoreBtn.style.borderRadius = "5px";
        learnMoreBtn.style.cursor = "pointer";
        learnMoreBtn.style.fontSize = "16px";
        learnMoreBtn.addEventListener("click", function() {
            window.location.href = "https://info.letsbeanalyst.com/dataanalyticsbatch";
        });

        let closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.style.marginTop = "15px";
        closeBtn.style.padding = "10px 15px";
        closeBtn.style.border = "none";
        closeBtn.style.backgroundColor = "#d60000";
        closeBtn.style.color = "#fff";
        closeBtn.style.borderRadius = "5px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.fontSize = "16px";
        closeBtn.addEventListener("click", function() {
            document.body.removeChild(popup);
        });

        popup.appendChild(message);
        popup.appendChild(learnMoreBtn);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }

    function showRegularPopup() {
        let popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.width = "400px";
        popup.style.height = "220px";
        popup.style.backgroundColor = "#ffcc00";
        popup.style.color = "#333";
        popup.style.borderRadius = "15px";
        popup.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        popup.style.padding = "25px";
        popup.style.textAlign = "center";
        popup.style.fontSize = "18px";
        popup.style.fontWeight = "bold";
        popup.style.fontFamily = "Arial, sans-serif";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "1000";
        popup.style.border = "3px solid #ff6600";

        let message = document.createElement("p");
        message.textContent = "🚀 BIG ANNOUNCEMENT! 🚀\nCheckout our Live courses! Live Batch starting soon. Enroll Now!";
        message.style.margin = "10px 0";
        message.style.fontSize = "20px";
        message.style.color = "#d60000";

        let link = document.createElement("a");
        link.href = "https://info.letsbeanalyst.com/dataanalyticsbatch";
        link.textContent = "👉 Enroll Here";
        link.style.display = "block";
        link.style.marginTop = "10px";
        link.style.fontSize = "18px";
        link.style.color = "#007BFF";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";

        let closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.style.marginTop = "15px";
        closeBtn.style.padding = "10px 15px";
        closeBtn.style.border = "none";
        closeBtn.style.backgroundColor = "#d60000";
        closeBtn.style.color = "#fff";
        closeBtn.style.borderRadius = "5px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.fontSize = "16px";
        closeBtn.addEventListener("click", function() {
            document.body.removeChild(popup);
        });

        popup.appendChild(message);
        popup.appendChild(link);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);
    }
    
    setTimeout(showAnnouncementPopup, 2000);
});
