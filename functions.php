<?php

// -------------------- plugin --------------------
function my_plugins() {

  wp_enqueue_style('style-swiper', get_template_directory_uri() . '/css/plugin/swiper-bundle.css' , array(), '1.0.0',);
  wp_enqueue_style('style-fancybox', get_template_directory_uri() . '/css/plugin/fancybox.css' , array(), '1.0.0',);
  wp_enqueue_script('script-swiper', get_template_directory_uri() . '/js/plugin/swiper-bundle.min.js', array(), '1.0.0',);
  wp_enqueue_script('script-fancybox', get_template_directory_uri() . '/js/plugin/fancybox.umd.js', array(), '1.0.0',);
}

add_action('wp_enqueue_scripts', 'my_plugins');


// -------------------- style & jQuery & FontAwesome --------------------
function my_files() {
  wp_enqueue_style('style-style', get_template_directory_uri() . '/css/styles.css' , array(), '1.0.0',);
  wp_enqueue_style('icon', 'https://use.fontawesome.com/releases/v6.3.0/css/all.css');
  wp_enqueue_script('script-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0',);
  // wp_enqueue_script('script-myswiper', get_template_directory_uri() . '/js/myswiper.js', array(), '1.0.0',);
}

add_action('wp_enqueue_scripts', 'my_files');

// -------------------- タイトルタグ --------------------
add_theme_support('title-tag');

add_filter('document_title_separator', 'title_separator');
function title_separator($separator){	
  $separator = '-'; 
	return $separator;
}

// --------------------Contact Form 7の自動pタグ無効--------------------
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}