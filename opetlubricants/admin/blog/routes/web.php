<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return ("<h2>First page</h2>");
	# return view('welcome');
});

Route::get('/array', function () {
    return ("<h2>First page</h2>");
	# return view('welcome');
});

Route::get('/home', function () {
    $data = [];
	$data ['version']= '0.1.1';
	return view('welcome', $data);
});