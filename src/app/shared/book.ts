export class Book {
    start:number;
    num_found:number;
    docs:[
       {
          cover_i:number,
          has_fulltext:boolean,
          edition_count:number,
          title:string,
          author_name: string [
             
          ],
          subject:string[],
          first_publish_year:number,
          key:string,
          ia: string [
             
          ],
          author_key:string [
          
          ],
          edition_key:string[

          ];
          public_scan_b:boolean
       }
    ]
}
