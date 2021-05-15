<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;
use Validator;

class EtudiantController extends Controller
{
    //
    public function getEtudiants() {
        return response()->json(Etudiant::get(),200);
    }


    public function getEtudiantsById($id){
        $etudiant = Etudiant::find($id) ;
        if (is_null($etudiant)){
            return response()->json(["Message"=>"Enregistrement non trouvé !"],404);
        }
        return response()->json(Etudiant::find($id),200);


    }


    public function saveEtudiant(Request $request){
        $rules= [
            "nom"=>'required|min:3',
            "prenom"=>'required|min:3'
        ];
        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()){
            return response()->json($validator->errors(),400);
        }
        $etudiant = Etudiant::create($request->all());
        return response()->json($etudiant,201);

    }
    

    public function updateEtudiant(Request $request, $id) {
        $etudiant = Etudiant::find($id) ;
        if (is_null($etudiant)){
            return response()->json(["Message"=>"Enregistrement non trouvé !"],404);
        }
        $etudiant->update($request->all());
        return response()->json($etudiant,200);
    }

    public function deleteEtudiant(Request $request, $id) {
        $etudiant = Etudiant::find($id) ;
        if (is_null($etudiant)){
            return response()->json(["Message"=>"Enregistrement non trouvé !"],404);
        }
        $etudiant->delete();
        return response()->json(null,204);
    }

    public function searchEtudiant($nom){
      //  $search_text = $_GET['query'];
       // $etudiant = Etudiant::where("nom","LIKE",'%'.$search_text.'%')->get();
        $etudiant = Etudiant::where("nom","LIKE",'%'.$nom.'%')->get();
       return $etudiant;
 
    }

    public function searchEtudiantByPrenom($prenom) {
        $etudiant = Etudiant::where("prenom","LIKE",'%'.$prenom.'%')->get();
        return $etudiant;
    }
}
