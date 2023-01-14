<template>
  <section class="footer-wrapper">
    <ul class="link-list">
      <div class="link-column">
        <h4 class="link-title">Email</h4>
        <a href="mailto:tropicstech@gmail.com" class="link-item"
          >tropicstech@gmail.com</a
        >
      </div>
    </ul>
    <div class="social-icons-container">
      <div class="company-container">
        <p class="slogan">Always finding ways to grow</p>
      </div>
      <div class="social-container">
        <a href="github.com" class="social-icons">
          <i class="bx bxl-github" />
        </a>
        <a href="instagram.com" class="social-icons">
          <i class="bx bxl-instagram" />
        </a>
        <a href="linkedin.com" class="social-icons">
          <i class="bx bxl-linkedin-square" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-wrapper {
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  @media screen and (max-width: $breakpoints-sm) {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
}

.link-item {
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  &:hover {
    color: #fff;
    left: 6px;
  }
  @media screen and (max-width: $breakpoints-md) {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
  @media screen and (max-width: $breakpoints-sm) {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
}

.social-icons-container {
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: var(--breakpoints-md)) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: var(--breakpoints-sm)) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}

.companty-container {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media screen and (max-width: var(--breakpoints-md)) {
    flex-direction: column;
    align-items: baseline;
  }
  @media screen and (max-width: var(--breakpoints-sm)) {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
}

.slogan {
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
  @media screen and (max-width: var(--breakpoints-md)) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: var(--breakpoints-sm)) {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
}

.social-container {
  display: flex;
  align-items: center;
  @media screen and (max-width: var(--breakpoints-md)) {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
}

.link-list {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  @media screen and (max-width: var(--breakpoints-lg)) {
    padding: 32px 0 16px;
  }
  @media screen and (max-width: var(--breakpoints-md)) {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media screen and (max-width: var(--breakpoints-sm)) {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
}

.link-column {
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
}
.link-test {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  @media screen and (max-width: var(--breakpoints-sm)) {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
}

.social-icons {
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  font-size: 3rem;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
}
</style>
