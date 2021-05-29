export const BRANCH_AND_BOUND = 0
export const CDS = 1
export const NEH = 2
export const GENETIC_ALGORITHM = 3
export const ANT_COLONY_OPTIMIZATION = 4

class Method{
    id
    params
    constructor(id,params) {
    	this.id= id
        this.params = params
    }
}

export const NEH_METHOD = new Method(NEH,)

