import {AOUser}from '../user/AOUser';
import {AOApp}from '../app/app_meta_data/AOApp';
import {AOPage}from '../app/app_meta_data/AOPage';
import{AOToolBase}from '../tool/AOToolBase';
import {PageMetaData}from '../app/app_meta_data/PageMetaData';
import { Observable } from 'rxjs';

export class AOEditorStore{

    currentUser :AOUser;
    currentApp :AOApp;
    currentPage :AOPage;
    selectedTool :AOToolBase;
    appPageList: Observable<PageMetaData[]>; 

}

