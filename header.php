<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>

<body class="top">
  <header id="header" class="header">

    <div class="header__wrap">

      <div class="header__top">
        <h1 class="site-logo">
          <a href="<?php echo home_url(); ?>" class="site-logo__link">
            <img src="<?php echo get_template_directory_uri(); ?>/images/lion-logo-2.svg" alt="LEO COAT" class="site-logo__image">
          </a>
        </h1>
  
        <div class="burger" id="show">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <!-- header__top -->
      
      <div class="header__bottom">
        <nav class="nav header-nav">
          <ul class="nav__list  header-nav__list">
            <li class="nav__item"><a href="<?php echo home_url(); ?>/superleocoat" target="_blank" class="nav__link header-nav__link">最上級3層コート</a></li>
            <li class="nav__item"><a href="<?php echo home_url(); ?>/maintenance"  target="_blank" class="nav__link header-nav__link">ポリマースプレー</a></li>
            <li class="nav__item"><a href="<?php echo home_url(); ?>/inspections" target="_blank"  class="nav__link header-nav__link">試験結果</a></li>
            <li class="nav__item"><a href="<?php echo home_url(); ?>/faq" target="_blank" class="nav__link header-nav__link">Q&A</a></li>
            <li class="nav__item"><a href="<?php echo home_url(); ?>/about" target="_blank" class="nav__link header-nav__link">会社概要</a></li>
          </ul>
        </nav>

        <div class="btn-wrap">
          <a href="https://www.amazon.co.jp/stores/page/6DF7E7BC-F501-4EA4-821D-E3AF0D70736E?&linkCode=sl2&tag=amazon0ad3-22&linkId=ca0c4ec9efc5e3ada1d4f2881d07fa6d&language=ja_JP&ref_=as_li_ss_tl" target="_blank" class="amznbtn --nav --icon">Amazon.jp</a>
        </div>
      </div>
      <!-- header__bottom -->

    </div>
    <!-- header__wrap -->
  </header>