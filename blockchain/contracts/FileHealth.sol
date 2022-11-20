// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./utils/IERC721Custom.sol";

contract FileHealth is Ownable {
    /// @dev counter
    uint256 public counterDoctor;
    uint256 public counterPatient;
    uint256 public counterFile;

    /// @dev nft contract
    address fileHealthNFTAddress;

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
    constructor(string memory _uriStorage, address _fileHealthNFTAddress) {
        counterDoctor = 0;
        counterPatient = 0;
        counterFile = 0;
        uriStorage = _uriStorage;
        fileHealthNFTAddress = _fileHealthNFTAddress;
    }

    /// @dev register a new doctor
    function registerDoctor(
        string memory _name,
        string memory _surname,
        string memory _birthDate,
        string memory _speciality
    ) public {
        /// @dev check if the doctor is already registered
        require(isDoctor[msg.sender], "You need to be a doctor");

        /// @dev set doctor struct
        doctors[counterDoctor] = Doctor(msg.sender, _name, _surname, _birthDate, _speciality);
        counterDoctor++;

        /// @dev mint a new file health NFT
        IERC721Custom(fileHealthNFTAddress).safeMint(msg.sender, uriStorage);
    }

    /// @dev register a new patient
    function registerPatient(
        string memory _name,
        string memory _surname,
        string memory _birthDate
    ) public {
        /// @dev check if the patient is already registered
        require(isPatient[msg.sender], "You need to be a patient");

        /// @dev set patient struct
        patients[counterPatient] = Patient(msg.sender, _name, _surname, _birthDate);
        counterPatient++;

        /// @dev mint a new file health NFT
        IERC721Custom(fileHealthNFTAddress).safeMint(msg.sender, uriStorage);
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
