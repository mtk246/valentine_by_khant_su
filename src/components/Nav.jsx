import React from "react";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid container-navbar">
        <a class="navbar-brand" href="#">
          <img src="img/m&k_logo.png" alt="" width="130" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#m&k">
                m&k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#open_when">
                open when
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery">
                gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#for_u">
                for u
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
