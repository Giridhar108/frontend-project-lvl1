const getProgression = (startNumber, step, length) => {
    const progression = [startNumber];
    let constanta = step
    for (let i = 0; i < length; i += 1) {
      progression.push(startNumber + constanta);
      constanta += step
    }
    return progression;
};

export default getProgression;
