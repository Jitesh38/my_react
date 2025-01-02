import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite)
            .setProject(conf.project_id);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userid }) {
        try {
            return await this.databases.createDocument(conf.database_id, conf.collection_id, slug, {
                title, content, featuredimage, status, userid
            })
        } catch (error) {
            console.log('Appwrite :: createPost :: error :: ', error);
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateDocument(conf.database_id, conf.collection_id, slug, {
                title, content, featuredimage, status
            })
        } catch (error) {
            console.log('Appwrite :: updatePost :: error :: ', error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.database_id, conf.collection_id, slug)
            return true
        } catch (error) {
            console.log('Appwrite :: deletePost :: error :: ', error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.database_id, conf.collection_id, slug)
        } catch (error) {
            console.log('AppWrite :: getpost :: error :: ', error);
        }
    }
    async allPost() {
        try {
            return await this.databases.listDocuments(conf.database_id, conf.collection_id)
        } catch (error) {
            console.log('AppWrite :: all post :: error :: ', error);
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.database_id, conf.collection_id, queries)
        } catch (error) {
            console.log('AppWrite :: all post :: error :: ', error);
            return false;
        }
    }

    //file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.bucket_id, ID.unique(), file)
        } catch (error) {
            console.log('appwrite :: upload file :: ', error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.bucket_id,fileId)
            return true
        } catch (error) {
            console.log('Error :: Delete File ');
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.bucket_id,fileId)
    }
}

const service = new Service()

export default service
