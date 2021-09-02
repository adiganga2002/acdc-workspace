/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "./components/ssapp-window/ssapp-window";
export namespace Components {
    interface MultiSpinner {
        "type"?: string;
    }
    interface PdmBarcodeScanner {
        "compatibilityMode"?: string;
        "data": any;
        "loaderType"?: string;
        "switchCamera": () => Promise<void>;
        "timeout"?: number;
    }
    interface PdmBarcodeScannerController {
        "barcodeTitle"?: string;
        "changeCamera": () => Promise<void>;
        "dismiss": (result?: any) => Promise<void>;
        "holdForScan": (callback: any) => Promise<any>;
        "present": (props?: any, callback?: any) => Promise<any>;
        "scannerMode"?: string;
    }
    interface SsappWindow {
        "appName": string;
        "landingPath": string;
        "match": MatchResults;
        "params": string;
        "refresh": any;
        "seed": string;
    }
}
declare global {
    interface HTMLMultiSpinnerElement extends Components.MultiSpinner, HTMLStencilElement {
    }
    var HTMLMultiSpinnerElement: {
        prototype: HTMLMultiSpinnerElement;
        new (): HTMLMultiSpinnerElement;
    };
    interface HTMLPdmBarcodeScannerElement extends Components.PdmBarcodeScanner, HTMLStencilElement {
    }
    var HTMLPdmBarcodeScannerElement: {
        prototype: HTMLPdmBarcodeScannerElement;
        new (): HTMLPdmBarcodeScannerElement;
    };
    interface HTMLPdmBarcodeScannerControllerElement extends Components.PdmBarcodeScannerController, HTMLStencilElement {
    }
    var HTMLPdmBarcodeScannerControllerElement: {
        prototype: HTMLPdmBarcodeScannerControllerElement;
        new (): HTMLPdmBarcodeScannerControllerElement;
    };
    interface HTMLSsappWindowElement extends Components.SsappWindow, HTMLStencilElement {
    }
    var HTMLSsappWindowElement: {
        prototype: HTMLSsappWindowElement;
        new (): HTMLSsappWindowElement;
    };
    interface HTMLElementTagNameMap {
        "multi-spinner": HTMLMultiSpinnerElement;
        "pdm-barcode-scanner": HTMLPdmBarcodeScannerElement;
        "pdm-barcode-scanner-controller": HTMLPdmBarcodeScannerControllerElement;
        "ssapp-window": HTMLSsappWindowElement;
    }
}
declare namespace LocalJSX {
    interface MultiSpinner {
        "type"?: string;
    }
    interface PdmBarcodeScanner {
        "compatibilityMode"?: string;
        "data"?: any;
        "loaderType"?: string;
        /**
          * Through this event data is passed
         */
        "onSsapp-action"?: (event: CustomEvent<any>) => void;
        /**
          * Through this event errors are passed
         */
        "onSsapp-send-error"?: (event: CustomEvent<any>) => void;
        "timeout"?: number;
    }
    interface PdmBarcodeScannerController {
        "barcodeTitle"?: string;
        "scannerMode"?: string;
    }
    interface SsappWindow {
        "appName"?: string;
        "landingPath"?: string;
        "match"?: MatchResults;
        "onWindowAction"?: (event: CustomEvent<any>) => void;
        "params"?: string;
        "refresh"?: any;
        "seed"?: string;
    }
    interface IntrinsicElements {
        "multi-spinner": MultiSpinner;
        "pdm-barcode-scanner": PdmBarcodeScanner;
        "pdm-barcode-scanner-controller": PdmBarcodeScannerController;
        "ssapp-window": SsappWindow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "multi-spinner": LocalJSX.MultiSpinner & JSXBase.HTMLAttributes<HTMLMultiSpinnerElement>;
            "pdm-barcode-scanner": LocalJSX.PdmBarcodeScanner & JSXBase.HTMLAttributes<HTMLPdmBarcodeScannerElement>;
            "pdm-barcode-scanner-controller": LocalJSX.PdmBarcodeScannerController & JSXBase.HTMLAttributes<HTMLPdmBarcodeScannerControllerElement>;
            "ssapp-window": LocalJSX.SsappWindow & JSXBase.HTMLAttributes<HTMLSsappWindowElement>;
        }
    }
}
