document.getElementById("launchApp").addEventListener("click", () => {

    new WinBox("My App", {
      width: "400px",
      height: "300px",
      x: "center",
      y: "center",
      background: "#333",
      onfocus() {
        this.setBackground("#444");
      },
      onblur() {
        this.setBackground("#222");
      }
    });
  });
