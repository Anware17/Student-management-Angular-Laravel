<?php
 namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth ;
use App\Models\Administrateur;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $this->validate($request, [

            "username"=>"required|string|unique:users",
            "password"=>"required|string|min:6|max:10"

        ]);

        $admin = new Administrateur();
        $admin->username=$request->username;
        $admin->password=bcrypt($request->password);
        $admin->save();

        return response()->json([
            "status"=>true,
            "admin"=>$admin
        ]);
  
    }
  
    public function login(Request $request)
    { // header("Access-Control-Allow-Origin: *");
        $credentials=$request->only("username","password");
        $token=null;
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                "status"=>false,
                "message"=>"Unauthorized"
            ]);
        }
        return response()->json([
            "jwt" => $token
        ]);
    }

    public function logout(Request $request)
{  //header("Access-Control-Allow-Origin: *");
    $this->validate($request,[
        "token"=>"required"
    ]);
    try {
        JWTAuth::invalidate($request->token);
        return response()->json([
            "status"=>true,
            "message" => "L'administrateur s'est déconnecté avec succès"
        ]) ;
        
  }  catch(JWTException $exception) {
      return response()->json([
        "status"=>false,
        "message"=>"l'administrateur ne peut pas être déconnecté"
      ]);

    }


    }
}


