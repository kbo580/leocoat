</main>

<footer id="footer" class="footer noto-sans">
  <div class="inner">
    <div class="footer__wrap">
      <div class="footer-bg">
        <a href="index.html"><strong class="footer-bg__title">LEO COAT</strong></a>
        <p class="footer-bg__subtitle">New Generation Super Glass Coating</p>
      </div>
      <!-- footer-bg -->

      <nav class="nav footer-nav">
        <ul class="nav__list footer-nav__list">
          <li class="nav__item  footer-nav__item"><a href="<?php echo home_url(); ?>/superleocoat" target="_blank"  class="nav__link">最上級3層コート</a></li>
          <li class="nav__item  footer-nav__item"><a href="<?php echo home_url(); ?>/maintenance" target="_blank"  class="nav__link">ポリマースプレー</a></li>
          <li class="nav__item  footer-nav__item"><a href="<?php echo home_url(); ?>/inspections" target="_blank"  class="nav__link">試験結果</a></li>
          <li class="nav__item  footer-nav__item"><a href="<?php echo home_url(); ?>/faq" target="_blank"  class="nav__link">Q&A</a></li>
          <li class="nav__item  footer-nav__item"><a href="<?php echo home_url(); ?>/about" target="_blank"  class="nav__link">会社概要</a></li>
        </ul>
      </nav>

      <p class="footer__copyright">© 2018, LEO COAT - All Rights Reserved</p>

    </div>
    <!-- /fooetr__wrap -->
  </div>
  <!-- /inner -->
  
</footer>
<?php wp_footer(); ?>
<?php if(is_home() || is_front_page()): ?>
  <script src="<?php echo get_template_directory_uri(); ?>/js/myswiper.js"></script>
<?php endif; ?>
</body>

</html>