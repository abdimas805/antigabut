function promoSlider() {
    return {
        activeSlide: 0,
        totalSlides: 3,
        timer: null,
        startAutoSlide() {
            this.timer = setInterval(() => {
                this.activeSlide = (this.activeSlide + 1) % this.totalSlides;
            }, 3500); // Berganti otomatis setiap 3.5 detik
        }
    }
}