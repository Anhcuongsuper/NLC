<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js' type='text/javascript'></script>
<script type='text/javascript'>
$(function() {
 $(window).scroll(function() {
 if ($(this).scrollTop() != 0) {
 $('#bttop').fadeIn();
 } else {
 $('#bttop').fadeOut();
 }
 });
 $('#bttop').click(function() {
 $('body,html').animate({
 scrollTop: 0
 }, 800);
 });
});
</script>