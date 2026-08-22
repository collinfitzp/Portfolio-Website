// =========================================================
// Portfolio shared behavior: mobile nav, active link,
// footer year, contact form handling.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after a link is tapped (mobile)
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Highlight the active nav link ---- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  /* ---- Footer year ---- */
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Contact form (submits to Formspree via fetch/AJAX) ---- */
  const form = document.getElementById("contact-form");
  if (form) {
    const successEl = document.getElementById("form-success");
    const errorEl = document.getElementById("form-error");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Reset status messages on each attempt
      if (successEl) successEl.classList.remove("visible");
      if (errorEl) errorEl.classList.remove("visible");

      const originalBtnText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          if (successEl) successEl.classList.add("visible");
        } else {
          const data = await response.json().catch(() => null);
          const message =
            data && data.errors && data.errors.length
              ? data.errors.map((err) => err.message).join(", ")
              : "Something went wrong sending your message. Please try again or email me directly.";
          if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add("visible");
          }
        }
      } catch (err) {
        if (errorEl) {
          errorEl.textContent =
            "Something went wrong sending your message. Please try again or email me directly.";
          errorEl.classList.add("visible");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  }
});
