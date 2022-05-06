class InterfaceDatabase{
    connect(){
        throw new Error("Subclasses cannot use method 'connect' without implementing it")
    }
    
}

export default InterfaceDatabase