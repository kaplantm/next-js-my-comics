function getFlags() {
    while test $# -gt 0; do
        case "$1" in
        -a)
            shift
            action=$1
            shift
            ;;
        -f)
            shift
            folder=$1
            shift
            ;;
        -d)
            shift
            maxDimension=$1
            shift
            ;;
        -s)
            shift
            maxSize=$1
            shift
            ;;
        *)
            echo "$1 is not a recognized flag!"
            return 1
            ;;
        esac
    done

    if [ $action = "verify" ]; then
        # TODO: add prompt if you committed
        echo "Verifying image files..."
        eval "node ./scripts/image-optimization/verify.js $folder $maxDimension $maxSize"
    else
        echo "Optimizing image files..."
        eval "node ./scripts/image-optimization/optimize.js $folder $maxDimension $maxSize"
    fi
}

function init() {
    getFlags "$@"
}

init "$@"
