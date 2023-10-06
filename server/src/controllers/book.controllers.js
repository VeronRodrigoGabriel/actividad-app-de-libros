export const ctrlAddbook = (req, res) => {
    console.log(req.files)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "No se adjuntaron archivos." });
    }

    const file = req.files.name;
    const path = `${__dirname}/Archivos/${file.name}`;

    file.mv(path, (err) => {
        if (err) {
            console.error("Error al mover el archivo:", err);
            return res.status(500).json({ error: "Error al guardar el archivo." });
        }

        return res.status(200).json({ message: "Archivo cargado con éxito." });
    });
};
