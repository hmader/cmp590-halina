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

			<div id="waypoint-start" class="homepage-page-content">

				<div id="inner-content" class="homepage-wrap cf">

						<main id="main" class="m-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
                            
                            <div class="homepage-intro">
                                <div class="inner">
                                <h1>Old Smokey</h1>
                                <section>                                    
                            <p>From 1926 to 1970, the City of Miami (City) operated a solid waste incinerator at 3425 Jefferson Street in West Coconut Grove. Despite persistent complaints and requests for the incinerator to be shut down by West Grove residents, it continued its operation for 44 years.
                                </p>
                                    </section>
                                </div>
                            </div>
                            
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
                            
                 <div id="waypoint1" class="homepage-photo-column m-all t-1of2 d-1of2">
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_08.jpg" width="100%">
    </div>
    <div id="waypoint2" class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_04.jpg" width="100%">
    </div>
    <div class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_01.jpg" width="100%">
    </div>                                               
    <div id="waypoint3" class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_11.jpg" width="100%">
    </div>
    <div id="waypoint4" class="full-view dark-back">
        <img src="/wp-content/uploads/2015/04/osm_02.jpg" width="100%">
    </div>
    <div class="full-view dark-back">
        <img src="/wp-content/uploads/2015/04/osm_09.jpg" width="100%">
    </div>
    <div id="waypoint5" class="full-view dark-back">
        <img src="/wp-content/uploads/2015/04/osm_07.jpg" width="100%">
    </div>
    <div id="waypoint6" class="full-view dark-back">
        <img src="/wp-content/uploads/2015/04/osm_05.jpg" width="100%">
    </div>
    <div id="waypoint7" class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_03.jpg" width="100%">
    </div>
     <!--                
    <div id="waypoint8" class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_02.jpg" width="100%">
    </div>
    <div id="waypoint9" class="full-view">
        <img src="/wp-content/uploads/2015/04/osm_10.jpg" width="100%">
    </div>
-->
</div>
                            
                            <div id="waypoint-end" class="homepage-end-photo" style="background-image: url(/wp-content/uploads/2015/04/osm_06.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; clear: both; height: 90vh;">
                               <div>
                                 <p>The numerous soil assessments at the Old Smokey site have continually shown high concentrations of arsenic, lead, barium, cadmium, and PAHs. Spot removal of contamination has occurred at the Old Smokey site but full remediation of the site has not occurred.</p>
                                   </div>
                            </div>
                            
                            <div class="homepage-end-text">
                            Reports have reaffirmed findings of contamination at Old Smokey and have identified offsite contamination of the surrounding parks and areas. The City needs to continue testing offsite to determine the full extent of the contamination, and the full extent of the contamination has not yet been determined.
                    </div>       
						</main>


				</div>

			</div>


<?php get_footer(); ?>
