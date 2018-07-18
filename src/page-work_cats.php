<?php
/* Template Name: Work Cats */
get_header();
?>

<div class="center">
	<div class="scol">
		<div class="content_style">
			<div class="content_inner">
				<?php the_field('category_description'); ?>
			</div>
		</div>
	</div>

	<div class="category_list clearfix">

		<?php if( have_rows('category') ):
    		while ( have_rows('category') ) : the_row();?>

				<div class="category_item">
					<a href="<?php the_sub_field('category_link'); ?>">
						<img width="1280" height="720" src="<?php the_sub_field('image'); ?> ?>">
						<div class="cat_overlay">
							<h3 class="tacenter"><?php the_sub_field('category_title'); ?></h3>
						</div>
					</a>
				</div>

		<?php endwhile;
				endif;?>

	</div>
</div>

<?php get_footer(); ?>
