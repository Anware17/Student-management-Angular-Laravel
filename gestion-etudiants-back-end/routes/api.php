<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\AuthController;
use App\Models\Etudiant;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('etudiants',[EtudiantController::class,'getEtudiants']);
Route::get('etudiants/{id}',[EtudiantController::class,'getEtudiantsById']);
Route::post('etudiants',[EtudiantController::class,'saveEtudiant']);
Route::put('etudiants/{id}',[EtudiantController::class,'updateEtudiant']);
Route::delete('etudiants/{id}',[EtudiantController::class,'deleteEtudiant']);
Route::get('etudiants/search/{nom}',[EtudiantController::class,'searchEtudiant']);
Route::get('etudiants/searchByPrenom/{prenom}',[EtudiantController::class,'searchEtudiantByPrenom']);



Route::post('register',"App\Http\Controllers\AuthController@register");
//Route::post('register',[AuthController::class],'register');
Route::post('login',"App\Http\Controllers\AuthController@login");
//Route::post('login',[AuthController::class],'login');
Route::get('etudiants/{id}',[EtudiantController::class,'getEtudiantsById']);
Route::get('etudiants',[EtudiantController::class,'getEtudiants']);

/*Route::group(["middleware"=>"auth.jwt"],function() {
    //Route::get('logout',[AuthController::class],'logout');
   // Route::post('etudiants',[EtudiantController::class,'saveEtudiant']);
    Route::get("logout",'App\Http\Controllers\AuthController@logout');
    Route::post('etudiants',"App\Http\Controllers\EtudiantController@saveEtudiant");
    Route::put('etudiants/{id}',[EtudiantController::class,'updateEtudiant']);
    Route::delete('etudiants/{id}',[EtudiantController::class,'deleteEtudiant']);
    Route::get('etudiants/search/{nom}',[EtudiantController::class,'searchEtudiant']);

});*/