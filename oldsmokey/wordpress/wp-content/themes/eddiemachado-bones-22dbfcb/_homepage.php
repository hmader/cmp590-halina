<?php
/*
 Template Name: Homepage
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

			<div class="homepage-page-content">

				<div id="inner-content" class="homepage-wrap cf">

						<main id="main" class="m-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
                            
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf homecontent m-all t-1of2 d-1of2 homepage-text-column' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
                             
								<section class="cf" itemprop="articleBody">
									<?php
										// the content (pretty self explanatory huh)
										the_content();

										/*
										 * Link Pages is used in case you have posts that are set to break into
										 * multiple pages. You can remove this if you don't plan on doing that.
										 *
										 * Also, breaking content up into multiple pages is a horrible experience,
										 * so don't do it. While there are SOME edge cases where this is useful, it's
										 * mostly used for people to get more ad views. It's up to you but if you want
										 * to do it, you're wrong and I hate you. (Ok, I still love you but just not as much)
										 *
										 * http://gizmodo.com/5841121/google-wants-to-help-you-avoid-stupid-annoying-multiple-page-articles
										 *
										*/
										wp_link_pages( array(
											'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'bonestheme' ) . '</span>',
											'after'       => '</div>',
											'link_before' => '<span>',
											'link_after'  => '</span>',
										) );
									?>
								</section>


								<footer class="article-footer">

                  <?php the_tags( '<p class="tags"><span class="tags-title">' . __( 'Tags:', 'bonestheme' ) . '</span> ', ', ', '</p>' ); ?>

								</footer>

						      
							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page-custom.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>
                            
                       <div class="homepage-photo-column m-all t-1of2 d-1of2" "width:100px">

    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img id="waypoint1" src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img id="waypoint2" src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div id="waypoint3" class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div id="waypoint4" class="full-view">
        <img id="waypoint3" src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div id="waypoint5" class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div id="waypoint6" class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/Arizona1.jpg" width="100%">
    </div>

</div>
						</main>


				</div>

			</div>


<?php get_footer(); ?>
