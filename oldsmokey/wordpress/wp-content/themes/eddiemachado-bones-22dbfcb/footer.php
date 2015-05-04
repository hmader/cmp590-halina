			<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div id="inner-footer" class="my-wrap cf">

					<nav class="nav" role="navigation">
                        <li id="share-button"><a>Share</a></li>
                         <li id="contact-button"><a>Contact Us</a></li>
						<?php wp_nav_menu(array(
    					'container' => 'div',                           // enter '' to remove nav container (just make sure .footer-links in _base.scss isn't wrapping)
    					'container_class' => 'footer-links cf',         // class of container (should you choose to use it)
    					'menu' => __( 'Footer Links', 'bonestheme' ),   // nav name
    					'menu_class' => 'nav footer-nav cf',            // adding custom nav class
    					'theme_location' => 'footer-links',             // where it's located in the theme
    					'before' => '',                                 // before the menu
    					'after' => '',                                  // after the menu
    					'link_before' => '',                            // before each link
    					'link_after' => '',                             // after each link
    					'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => 'bones_footer_links_fallback'  // fallback function
						)); ?>
					</nav>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

				</div>

			</footer>

		</div>
<!------- modal fun -->

<div class="md-overlay">

<div id="modal-share" class="modal md-effect-1">
	<div class="md-content">
		<h3>Share Our Story</h3>
		<div>
			<p>Through this site, the Old Smokey Steering committee hopes to spread awareness of the Old Smokey Incinerator and its toxic remains in order to spark change. Please share our site to help spread the word.</p>
			<ul>
				<a href="http://www.facebook.com/sharer.php?u=http://www.oldsmokey.org/story/" target="_blank"><img src="/story/wp-content/uploads/2015/05/facebook.png" alt="Facebook" /></a>
<a href="http://twitter.com/share?url=http://www.oldsmokey.org/story/&text=The Old Smokey Steering Committee&hashtags=oldsmokey" target="_blank"><img src="/story/wp-content/uploads/2015/05/twitter.png" alt="Twitter" /></a>
    <a href="mailto:?Subject=Simple Share Buttons&Body=I%20saw%20this%20and%20thought%20of%20you!%20 http://www.simplesharebuttons.com"><img src="/story/wp-content/uploads/2015/05/email.png" alt="Email" /></a>
			</ul>
			<button class="md-close">Close</button>
		</div>
	</div>
</div>


<div id="modal-contact" class="modal md-effect-1">
	<div class="md-content">
		<h3>Contact Us</h3>
		<div>
			<p>Do you have a question or comment for the Old Smokey Steering Committee? Email oldsmokeysteeringcommittee@gmail.com. </p>
			
			<button class="md-close">Close</button>
		</div>
	</div>
</div>


</div>
<!------- end modal fun -->

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
