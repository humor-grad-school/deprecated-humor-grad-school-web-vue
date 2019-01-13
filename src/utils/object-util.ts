export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
  
export function assignDeep(target, source) {
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(target, { [key]: source[key] });
                } else {
                    target[key] = assignDeep(target[key], source[key]);
                }
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        });
    }
    
    return target;
}