'use strict';

// Helper: toggle "active" class on an element
const toggleActive = (el) => el.classList.toggle('active');

/* ---------------- SIDEBAR (mobile show/hide contacts) ---------------- */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    toggleActive(sidebar);
    const label = sidebarBtn.querySelector('span');
    if (label) label.textContent = sidebar.classList.contains('active') ? 'Hide Contacts' : 'Show Contacts';
  });
}

/* ---------------- PROJECT FILTER (mobile custom select) ---------------- */
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

if (select) {
  select.addEventListener('click', function () {
    toggleActive(this);
    const list = this.nextElementSibling;
    if (list) list.classList.toggle('active');
  });
}

const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

selectItems.forEach((item) => {
  item.addEventListener('click', function () {
    const val = this.textContent.toLowerCase().trim();
    if (selectValue) selectValue.textContent = this.textContent;
    if (select) select.classList.remove('active');
    const list = document.querySelector('.select-list');
    if (list) list.classList.remove('active');
    filterFunc(val);
  });
});

// Desktop filter buttons
let lastClickedBtn = filterBtns[0];
filterBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const val = this.textContent.toLowerCase().trim();
    if (selectValue) selectValue.textContent = this.textContent;
    filterFunc(val);
    if (lastClickedBtn) lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
});

/* ---------------- CONTACT FORM (enable button when valid) ---------------- */
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (form && formBtn) formBtn.disabled = !form.checkValidity();
  });
});

/* ---------------- PAGE NAVIGATION ---------------- */
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const target = this.textContent.toLowerCase().trim();
    pages.forEach((page) => page.classList.toggle('active', page.dataset.page === target));
    navLinks.forEach((l) => l.classList.toggle('active', l.textContent.toLowerCase().trim() === target));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
