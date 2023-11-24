<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommuController extends AbstractController
{
    #[Route('/commu', name: 'app_commu')]
    public function index(): Response
    {
        return $this->render('commu/com.html.twig', [
            'controller_name' => 'CommuController',
        ]);
    }
}
