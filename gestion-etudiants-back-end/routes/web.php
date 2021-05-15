<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClasseController;
use App\Models\Etudiant;
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
/* $classe = factory('App\Models\Classe')->create();

  $etudiant = new Etudiant();
  $etudiant->title = 'premier titre';
  $etudiant->content = 'premier contenu';
  $etudiant->id_classe = $classe->id;

  $etudiant->save();*/

});

//Route::get('getClasses','App\Http\Controllers\ClasseController@getClasses');
