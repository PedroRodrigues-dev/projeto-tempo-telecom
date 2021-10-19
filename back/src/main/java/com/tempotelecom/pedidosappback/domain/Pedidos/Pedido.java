package com.tempotelecom.pedidosappback.domain.Pedidos;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.tempotelecom.pedidosappback.core.Entity.AbstractEntity;

@Entity
@Table(name = "pedidos")
@Getter
@Setter
public class Pedido extends AbstractEntity {
    private static final long serialVersionUID = 1L;
}
