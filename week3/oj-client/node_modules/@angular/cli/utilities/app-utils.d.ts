import { CliConfig as CliConfigInterface } from '../lib/config/schema';
export declare function getAppFromConfig(apps: CliConfigInterface['apps'], nameOrIndex: String): {
    name?: string;
    root?: string;
    outDir?: string;
    assets?: (string | {
        glob?: string;
        input?: string;
        output?: string;
    })[];
    deployUrl?: string;
    index?: string;
    main?: string;
    polyfills?: string;
    test?: string;
    tsconfig?: string;
    testTsconfig?: string;
    prefix?: string;
    serviceWorker?: boolean;
    styles?: (string | {
        [name: string]: any;
        input?: string;
    })[];
    stylePreprocessorOptions?: {
        includePaths?: string[];
    };
    scripts?: (string | {
        [name: string]: any;
        input: string;
    })[];
    environmentSource?: string;
    environments?: {
        [name: string]: any;
    };
};
