import $ from 'jquery';
import '@fancyapps/fancybox';

$(() => {
	const $shortPic = $('.js-gallery');
	const $overlay = $('.overlay');
	const $popup = $('.js-popup-pic');
	const $close = $('.js-close');
	$shortPic.on('click', function () {
		const src = $(this).find('.gallery-item__img').attr('src');
		$popup.find('.js-popup-inner').html(`<img src="${src}"
		class="popup-pic__img js-popup-image" alt="" role="presentation" />`);
		$overlay.addClass('active-overlay');
		$popup.addClass('active-popup');
	});
	function removePopup() {
		$overlay.removeClass('active-overlay');
		$popup.removeClass('active-popup');
		$popup.find('.js-popup-inner').html('');
	}

	$close.on('click', function () {
		removePopup();
	});
	$overlay.on('click', function () {
		removePopup();
	});

	const $paginationBtn = $('.js-pagination');
	const $slider = $('.js-slide');
	$paginationBtn.on('click', function () {
		$paginationBtn.removeClass('active');
		$(this).addClass('active');
		const left = -320 * $(this).attr('data-slide') + 320 + 'px';
		$slider.animate(
			{
				left: left
			},
		1000);
	});
	let userMessages = {};
	let adminMessages = {};

	const send = $('.js-send-btn');
	$('[type=submit]').on('click', function (e) {
		e.preventDefault();
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		const nowIs = hours + ':' + minutes + ':' + seconds;
		console.log(nowIs);
		const $input = $(this).parents('form').find('input');
		if (($(this).parents('form').attr('name') === 'user') && ($input.val() !== '')) {
			userMessages[nowIs] = {user: 'Наталия Полянская', message: $input.val()};
		}
		if (($(this).parents('form').attr('name') === 'admin') && ($input.val() !== '')) {
			adminMessages[nowIs] = {user: 'Администратор', message: $input.val()};
			console.log($input.val());
		}
		$input.val('');
		console.log(userMessages);
		console.log(adminMessages);
		const userLastMessage = userMessages[Object.keys(userMessages)[Object.keys(userMessages).length - 1]];
		console.log(userLastMessage);
		const adminLastMessage = adminMessages[Object.keys(adminMessages)[Object.keys(adminMessages).length - 1]];
		console.log(adminLastMessage);
	})
});
