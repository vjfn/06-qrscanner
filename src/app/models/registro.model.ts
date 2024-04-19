export class Registro {

    // https://flushfinder.es/

    // https[0]":"//flushfinder.es/[1]

    // version: https
    // text: //flushfinder.es/
    public format: string;
    public text: string;

    public type: string | undefined; //determinarTipo()
    public icon: string | undefined; //determinarTipo()
    public created: Date; //Se asigna automaticamente
    public url:any



    constructor( format: string, text: string ) {

        this.format = format;
        this.text = text;

        this.url = format+':'+text;

        this.created = new Date();

        this.determinarTipo();

    }

    private determinarTipo() {

        const inicioTexto = this.url.substring(0, 4);
        console.log('TIPO', inicioTexto );

        switch ( inicioTexto ) {

            case 'http':
                this.type = 'http';
                this.icon = 'globe';

            break;

            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
            break;

            default:
                this.type = 'No reconocido';
                this.icon = 'create';
        }

    }


}