'use strict';

/* ============================================================
   Commandeur Consulting – main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initBurgerMenu();
  initContactForm();
  initActiveNavLink();
  initFileInput();
});

/* Burger Menu
   ============================================================ */
function initBurgerMenu() {
  var burger    = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (!burger || !mobileNav) return;

  burger.addEventListener('click', function () {
    var isOpen = burger.classList.toggle('is-open');
    mobileNav.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('.mobile-nav__link, .mobile-nav__cta').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      burger.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* Active Navigation Link
   ============================================================ */
function initActiveNavLink() {
  var path  = window.location.pathname;
  var links = document.querySelectorAll('.nav__link, .mobile-nav__link');

  links.forEach(function (link) {
    var href = link.getAttribute('href') || '';
    if (
      (path.includes('ueber-uns')        && href.includes('ueber-uns'))        ||
      (path.includes('leistungen')       && href.includes('leistungen'))       ||
      (path.includes('recruiting')       && href.includes('recruiting'))       ||
      (path.includes('kontakt')          && href.includes('kontakt'))          ||
      (path === '/' || path.endsWith('index.html')) && (href === '../frontend/index.html' || href === 'index.html' || href === '/')
    ) {
      link.classList.add('active');
    }
  });
}

/* Contact Form Validation
   ============================================================ */
function initContactForm() {
  var form = document.querySelector('.form[data-validate]');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = validateForm(form);
    if (valid) {
      // Form is valid – no submission (static site)
      showSuccessState(form);
    }
  });

  form.querySelectorAll('.form__input, .form__select, .form__textarea').forEach(function (field) {
    field.addEventListener('blur', function () {
      validateField(field);
    });
    field.addEventListener('input', function () {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
}

function validateForm(form) {
  var fields  = form.querySelectorAll('[required]');
  var isValid = true;

  fields.forEach(function (field) {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  var checkbox = form.querySelector('.form__checkbox[required]');
  if (checkbox && !checkbox.checked) {
    checkbox.closest('.form__group').classList.add('error');
    isValid = false;
  }

  return isValid;
}

function validateField(field) {
  var group   = field.closest('.form__group');
  var errMsg  = group ? group.querySelector('.form__error-msg') : null;
  var value   = field.value.trim();
  var isValid = true;

  field.classList.remove('error');
  if (errMsg) errMsg.classList.remove('visible');

  if (field.hasAttribute('required') && value === '') {
    isValid = false;
    setFieldError(field, errMsg, 'Dieses Feld ist erforderlich.');
  } else if (field.type === 'email' && value !== '') {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      isValid = false;
      setFieldError(field, errMsg, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  }

  return isValid;
}

function setFieldError(field, errMsg, message) {
  field.classList.add('error');
  if (errMsg) {
    errMsg.textContent = message;
    errMsg.classList.add('visible');
  }
}

function showSuccessState(form) {
  var btn = form.querySelector('[type="submit"]');
  if (btn) {
    btn.textContent = 'Nachricht gesendet';
    btn.disabled    = true;
  }
}

/* File Input Label
   ============================================================ */
function initFileInput() {
  var fileInput = document.querySelector('.form__file');
  var fileName  = document.querySelector('.form__file-name');

  if (!fileInput || !fileName) return;

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];
    fileName.textContent = file ? file.name : '';
  });
}
