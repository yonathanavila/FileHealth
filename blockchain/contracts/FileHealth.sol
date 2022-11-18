// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./utils/IERC721Custom.sol";

contract FileHealth is Ownable {
    /// @dev counter
    uint256 public counterDoctor;
    uint256 public counterPatient;
    uint256 public counterFile;

    /// @dev uri storage
    string public uriStorage = "";

    /// @dev struct of pacients
    struct Patient {
        address patientAddress;
        string name;
        string surname;
        string birthDate;
    }

    /// @dev struct of doctors
    struct Doctor {
        address doctorAddress;
        string name;
        string surname;
        string birthDate;
        string speciality;
    }

    /// @dev struct of medical records
    struct MedicalRecord {
        address patientAddress;
        address doctorAddress;
        string date;
        string description;
    }

    /// @dev mapping Doctors
    mapping(uint256 => Doctor) public doctors;

    /// @dev mapping Patients
    mapping(uint256 => Patient) public patients;

    /// @dev mapping MedicalRecords
    mapping(uint256 => MedicalRecord) public medicalRecords;

    /// @dev mapping doctor role
    mapping(address => bool) public isDoctor;

    /// @dev mapping patient role
    mapping(address => bool) public isPatient;

    /// @dev create constructor
    constructor(string memory _uriStorage) {
        counterDoctor = 0;
        counterPatient = 0;
        counterFile = 0;
        uriStorage = _uriStorage;
    }

    /// @dev register a new doctor
    function registerDoctor(
        address _doctorAddress,
        string memory _name,
        string memory _surname,
        string memory _birthDate,
        string memory _speciality
    ) public {
        /// @dev check if the doctor is already registered
        require(!isDoctor[_doctorAddress], "You need to be a doctor");

        /// @dev set doctor struct
        doctors[counterDoctor] = Doctor(_doctorAddress, _name, _surname, _birthDate, _speciality);
        counterDoctor++;

        /// @dev mint a new file health NFT
        IERC721Custom(msg.sender).safeMint(_doctorAddress, uriStorage);
    }

    /// @dev register a new patient
    function registerPatient(
        address _patientAddress,
        string memory _name,
        string memory _surname,
        string memory _birthDate
    ) public {
        /// @dev check if the patient is already registered
        require(!isPatient[_patientAddress], "You need to be a patient");

        /// @dev set patient struct
        patients[counterPatient] = Patient(_patientAddress, _name, _surname, _birthDate);
        counterPatient++;

        /// @dev mint a new file health NFT
        IERC721Custom(msg.sender).safeMint(_patientAddress, uriStorage);
    }

    /// @dev create a new medical record
    function createMedicalRecord(
        address _patientAddress,
        address _doctorAddress,
        string memory _date,
        string memory _description
    ) public {
        /// @dev set medical record struct
        medicalRecords[counterFile] = MedicalRecord(
            _patientAddress,
            _doctorAddress,
            _date,
            _description
        );
        counterFile++;
    }

    /// @dev set uri storage
    function setUriStorage(string memory _uriStorage) public onlyOwner {
        uriStorage = _uriStorage;
    }

    /// @dev set doctor role
    function addDoctorRole(address _account) external onlyOwner {
        isDoctor[_account] = true;
    }

    /// @dev remove doctor role
    function removeDoctorRole(address _account) external onlyOwner {
        isDoctor[_account] = false;
    }

    /// @dev set patient role
    function addPatientRole(address _account) external onlyOwner {
        isPatient[_account] = true;
    }

    /// @dev remove patient role
    function removePatientRole(address _account) external onlyOwner {
        isPatient[_account] = false;
    }
}
