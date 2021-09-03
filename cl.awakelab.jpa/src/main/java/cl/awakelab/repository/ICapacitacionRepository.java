package cl.awakelab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.awakelab.modelo.Capacitacion;

@Repository
public interface ICapacitacionRepository extends JpaRepository<Capacitacion, Integer>{

}
