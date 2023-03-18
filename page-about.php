<?php get_header(); ?>
<main class="about page">
  <div class="mv-common__fixedbg mv-common__padding--s">
    <div class="inner page-inner">
      <div class="page__heading-wrap">
        <h2 class="page__heading">About</h2>
        <p class="page__sub-heading">会社概要・お問い合わせ</p>
      </div>
    </div>
    <!-- inner -->
  </div>
  <!-- mv -->

  <div class="about-info__wrap page__text">
    <div class="inner page-inner">
      <h2 class="about-info__heading page__text" >製造販売元：<br>株式会社ホワイトナイト</h2>

      <ul class="about-info">
        <li>英語表記　WhiteKnight Co., Ltd.</li>
        <li><a href="https://whiteknight-co.jp" target="_blank" class="link-common--blue"> https://whiteknight-co.jp</a></li>
      </ul>

      <ul class="about-info">
        <li>〒104-0061 東京都中央区銀座7丁目13番6号 サガミビル2階</li>
        <li>代表取締役　金子 隆一</li>
        <li>設立　2012年9月14日</li>
      </ul>

      <ul class="about-info">
        <li>電話　<a href="tel:03-4455-3762" class="link-common--blue">03-4455-3762</a></li>
        <li>電話受付　平日9:00～18:00</li>
      </ul>

      <p class="about-info"><a href="https://page.line.me/gyj8924s?openQrModal=true" target="_blank" class="link-common--blue">LINEでのお問い合わせ</a>（24時間受付）</p>
      <p class="about-info"><a href="<?php echo home_url(); ?>/privacy" class="link-common--blue">プライバシーポリシー・サイト利用規約</a></p>
      <p class="about-info"><a href="<?php echo home_url(); ?>/delivery" class="link-common--blue">配送について</a></p>
    </div>
    <!-- inner -->
  </div>
  <!-- about-info-wrap -->

<?php get_template_part('template-parts/contact-form'); ?>


<?php get_footer(); ?>